package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Product struct {
	ID           primitive.ObjectID `json:"id" bson:"_id,omitempty"`
	Product_name string             `json:"product_name" bson:"product_name"`
	Description  string             `json:"description" bson:"description"`
	Price        int                `json:"price" bson:"price"`
	Image        string             `json:"image" bson:"image"`
	CreatedAt    time.Time          `json:"createdAt" bson:"createdAt"`
}
