export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  originalPrice?: number;
  brand: string;
  category: string;
  size: string;
  inStock: boolean;
  stockCount: number;
  images: string[];
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
  reviews?: Review[];
}

export interface User {
  id: string;
  email: string;
  name?: string;
  role: 'CUSTOMER' | 'ADMIN';
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  product: Product;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: string;
  userId: string;
  status: 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  total: number;
  subtotal: number;
  tax: number;
  shipping: number;
  paymentId?: string;
  trackingCode?: string;
  shippingAddress: ShippingAddress;
  orderItems: OrderItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  product: Product;
}

export interface Review {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment?: string;
  user: User;
  createdAt: Date;
  updatedAt: Date;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  address2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (productId: string, quantity?: number) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  totalItems: number;
  totalPrice: number;
}

export interface FilterOptions {
  brand?: string;
  category?: string;
  priceMin?: number;
  priceMax?: number;
  size?: string;
  inStock?: boolean;
}

export interface SortOption {
  value: string;
  label: string;
}