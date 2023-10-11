package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Category struct {
	ID           primitive.ObjectID `json:"id" bson:"_id,omitempty"`
	CategoryName string             `json:"CategoryName" bson:"CategoryName"`
	Description  string             `json:"description" bson:"description"`
	Image        string             `json:"image" bson:"image"`
	CreatedAt    time.Time          `json:"createdAt" bson:"createdAt"`
}
