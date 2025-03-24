// Задание 1

const orders = [
    { id: 1, item: "Laptop", paid: true },
    { id: 2, item: "Phone", paid: false },
    { id: 3, item: "Tablet", paid: true }
  ];
  
  const deliveryData = {
    1: "Delivered in 3 days",
    3: "Delivered in 5 days"
  };
  
  function fetchDeliveryInfo(orderId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ orderId, deliveryTime: deliveryData[orderId] || "Unknown" });
      }, 1000);
    });
  }
  
  function fetchOrders() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(orders);
      }, 2000);
    });
  }
  
  async function processOrder() {
    try {
      const orders = await fetchOrders();
  
      const paidOrders = orders.filter(order => order.paid);
  
      const deliveryPromises = paidOrders.map(order => fetchDeliveryInfo(order.id));
      const deliveryResults = await Promise.all(deliveryPromises);
  
      const finalOrders = paidOrders.map(order => {
        const deliveryInfo = deliveryResults.find(result => result.orderId === order.id);
        return {
          ...order,
          deliveryTime: deliveryInfo ? deliveryInfo.deliveryTime : "Unknown"
        };
      });
  
      console.log("Final Orders with Delivery Info:");
      console.log(finalOrders);
    } catch (error) {
      console.error("Error processing orders:", error);
    }
  }
  
  processOrder();

  // Задание 2

  class DynamicFilter<T extends object> {
    private collection: T[] = [];

    add(item: T): void {
        this.collection.push(item);
    }

    filterByKey<K extends keyof T>(key: K, value: T[K]): T[] {
        return this.collection.filter(item => item[key] === value);
    }

    getAll(): T[] {
        return this.collection;
    }
}