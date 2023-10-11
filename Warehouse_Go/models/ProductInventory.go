package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type ProductInventory struct {
	ID         primitive.ObjectID `json:"id" bson:"_id,omitempty"`
	ProductID  primitive.ObjectID `json:"productID" bson:"productID"`
	Quantity   int                `json:"quantity" bson:"quantity"`
	Expiration time.Time          `json:"expiration" bson:"expiration"`
	CreatedAt  time.Time          `json:"createdAt" bson:"createdAt"`
	UpdatedAt  time.Time          `json:"updatedAt" bson:"updatedAt"`
}
