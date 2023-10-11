package handlers

import (
	"context"
	"encoding/json"
	"net/http"
	"time"

	"Warehouse_Go/db"
	"Warehouse_Go/models"

	"Warehouse_Go/logger"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type productHandler struct {
	Collection *mongo.Collection
}

func InitializeproductHandler(collection *mongo.Collection) *productHandler {
	return &productHandler{Collection: collection}
}

func CreateProductHandler(w http.ResponseWriter, r *http.Request) {
	var product models.Product
	if err := json.NewDecoder(r.Body).Decode(&product); err != nil {
		logger.ErrorLogger.Println("Failed to decode request body:", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	product.CreatedAt = time.Now()

	db := db.GetDB()

	result, err := db.Collection("products").InsertOne(context.TODO(), product)
	if err != nil {
		logger.ErrorLogger.Println("Failed to insert product into the database:", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	product.ID = result.InsertedID.(primitive.ObjectID)
	jsonResponse(w, product, http.StatusCreated)
}
