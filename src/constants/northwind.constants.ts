import { NorthwindEntity } from "@/types/northwind.types";

const northwindEntities: NorthwindEntity[] = [
  { name: "Categories", endpointPrefix: "categories", path: "categories" },
  { name: "Customers", endpointPrefix: "customers", path: "customers" },
  { name: "Employees", endpointPrefix: "employees", path: "employees" },
  { name: "Orders", endpointPrefix: "orders", path: "orders" },
  { name: "Products", endpointPrefix: "products", path: "products" },
  { name: "Regions", endpointPrefix: "regions", path: "regions" },
  { name: "Shippers", endpointPrefix: "shippers", path: "shippers" },
  { name: "Suppliers", endpointPrefix: "suppliers", path: "suppliers" },
];

export { northwindEntities };
