package db

import (
	"context"
	"time"

	"Warehouse_Go/logger"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var client *mongo.Client
var database *mongo.Database

func ConnectToMongoDB() (*mongo.Client, error) {
	connectionURI := "mongodb://localhost:27017"
	clientOptions := options.Client().ApplyURI(connectionURI)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var err error
	client, err = mongo.Connect(ctx, clientOptions)
	if err != nil {

		logger.ErrorLogger.Println("Failed to connect to MongoDB:", err)
		return nil, err
	}

	err = client.Ping(ctx, nil)
	if err != nil {

		logger.ErrorLogger.Println("MongoDB connection ping failed:", err)
		return nil, err
	}

	database = client.Database("Storage")

	logger.InfoLogger.Println("Connected to MongoDB")

	return client, nil
}

func GetDB() *mongo.Database {
	return database
}
