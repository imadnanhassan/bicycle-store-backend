# **Bicycles Store Backend**

## **Features**

- **Product Management**  
  - Add, update, delete, and view products.
  - Tracks inventory and availability.

- **Order Management**  
  - Create orders linked to specific products.
  - Automatic inventory adjustment upon order placement.

- **Revenue Calculation**  
  - Aggregates total revenue from all orders.

- **Error Handling**  
  - Robust error handling for invalid requests or insufficient stock.

- **MongoDB Integration**  
  - Secure and scalable database integration.


## **Technologies Used**

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing products and orders.
- **TypeScript**: Ensures type safety in the codebase.
- **Vercel**: Deployment platforms for hosting the backend.


## Installation

### Clone the Repository
git clone https://github.com/your-username/bicycles-store-backend.git
cd bicycles-store-backend


### Category Update




```https
  POST /api/products/
```

| Parameter         | Type      |
| :--------         | :-------  | 
| `name`            | `string`  | 
| `brand`           | `string`  | 
| `price`           | `number`  | 
| `type`            | `string`  | 
| `description`     | `string`  | 
| `quantity`        | `number`  | 
| `inStock`         | `boolean`  | 