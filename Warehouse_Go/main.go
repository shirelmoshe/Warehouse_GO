package main

import (
	"Warehouse_Go/db"
	"Warehouse_Go/handlers"
	"Warehouse_Go/logger"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"go.mongodb.org/mongo-driver/mongo"
)

var categoryCollection *mongo.Collection
var productInventoryCollection *mongo.Collection
var productCollection *mongo.Collection

func main() {
	client, err := db.ConnectToMongoDB()
	if err != nil {
		logger.ErrorLogger.Fatalf("Failed to connect to MongoDB: %v", err)
	}
	defer client.Disconnect(nil)

	categoryCollection = client.Database("Storage").Collection("categories")
	handlers.InitializeCategoryHandler(categoryCollection)

	categoryCollection = client.Database("Storage").Collection("productInventory")
	handlers.InitializeCategoryHandler(productInventoryCollection)

	categoryCollection = client.Database("Storage").Collection("products")
	handlers.InitializeCategoryHandler(productCollection)

	router := mux.NewRouter()
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowCredentials: true,
		AllowedMethods:   []string{"POST", "GET", "OPTIONS", "PUT", "DELETE"},
		AllowedHeaders: []string{
			"Content-Type",
			"Content-Length",
			"Accept-Encoding",
			"X-CSRF-Token",
			"Authorization",
			"accept",
			"origin",
			"Cache-Control",
			"X-Requested-With",
		},
	})
	handler := c.Handler(router)

	router.HandleFunc("/api/categories", handlers.CreateCategory).Methods("POST")
	router.HandleFunc("/api/product-inventory", handlers.CreateProductInventoryHandler).Methods("POST")
	router.HandleFunc("/api/products", handlers.CreateProductHandler).Methods("POST")
	router.HandleFunc("/api/categories_management", handlers.GetCategories).Methods("GET")

	port := ":8080"
	fmt.Printf("Server is running on port %s\n", port)
	logger.InfoLogger.Fatal(http.ListenAndServe(port, handler))
}
