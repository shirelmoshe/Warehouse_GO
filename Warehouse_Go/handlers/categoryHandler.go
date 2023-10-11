package handlers

import (
	"Warehouse_Go/db"
	"Warehouse_Go/logger"
	"Warehouse_Go/models"
	"context"
	"encoding/json"
	"net/http"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type CategoryHandler struct {
	Collection *mongo.Collection
}

func InitializeCategoryHandler(collection *mongo.Collection) *CategoryHandler {
	return &CategoryHandler{Collection: collection}
}

func CreateCategory(w http.ResponseWriter, r *http.Request) {
	var category models.Category
	if err := json.NewDecoder(r.Body).Decode(&category); err != nil {
		logger.ErrorLogger.Println("Failed to decode request body:", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	category.CreatedAt = time.Now()

	mongoDB := db.GetDB()

	result, err := mongoDB.Collection("categories").InsertOne(context.TODO(), category)
	if err != nil {
		logger.ErrorLogger.Println("Failed to insert category into the database:", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	category.ID = result.InsertedID.(primitive.ObjectID)
	jsonResponse(w, category, http.StatusCreated)
}
func GetCategories(w http.ResponseWriter, r *http.Request) {
	mongoDB := db.GetDB()
	filter := bson.M{}

	cursor, err := mongoDB.Collection("categories").Find(context.TODO(), filter)
	if err != nil {
		logger.ErrorLogger.Println("Failed to retrieve categories:", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer cursor.Close(context.TODO())

	var categories []models.Category

	for cursor.Next(context.TODO()) {
		var category models.Category
		if err := cursor.Decode(&category); err != nil {
			logger.ErrorLogger.Println("Failed to decode category:", err)
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		categories = append(categories, category)
	}

	if err := cursor.Err(); err != nil {
		logger.ErrorLogger.Println("Cursor iteration error:", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Set the Content-Type header to application/json
	w.Header().Set("Content-Type", "application/json")

	// Encode the response data as JSON and write it to the response writer
	responseBytes, err := json.Marshal(categories)
	if err != nil {
		logger.ErrorLogger.Println("Failed to marshal JSON response:", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	_, err = w.Write(responseBytes)
	if err != nil {
		logger.ErrorLogger.Println("Failed to write response:", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
