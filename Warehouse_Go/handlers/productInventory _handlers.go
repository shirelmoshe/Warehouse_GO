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

type productInventoryHandler struct {
	Collection *mongo.Collection
}

func InitializeproductInventoryHandler(collection *mongo.Collection) *productInventoryHandler {
	return &productInventoryHandler{Collection: collection}
}

func CreateProductInventoryHandler(w http.ResponseWriter, r *http.Request) {
	var productInventory models.ProductInventory
	if err := json.NewDecoder(r.Body).Decode(&productInventory); err != nil {
		logger.ErrorLogger.Println("Failed to decode request body:", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	productInventory.CreatedAt = time.Now()

	db := db.GetDB()

	result, err := db.Collection("productInventory").InsertOne(context.TODO(), productInventory)
	if err != nil {
		logger.ErrorLogger.Println("Failed to insert product inventory into the database:", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	productInventory.ID = result.InsertedID.(primitive.ObjectID)
	jsonResponse(w, productInventory, http.StatusCreated)
}
