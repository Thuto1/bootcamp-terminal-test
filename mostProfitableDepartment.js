export default function mostProfitableDepartment(salesData) {
  const departmentSales = new Map();
  salesData.forEach(sale => {
      const department = sale.department;
      const revenue = sale.sales;
      departmentSales.set(department, (departmentSales.get(department) || 0) + revenue);
  });
  
  var maxDepartment = null;
  var maxRevenue = -Infinity;
  departmentSales.forEach((revenue, department) => {
      if (revenue > maxRevenue) {
          maxRevenue = revenue;
          maxDepartment = department;
      }
  });
  
  return maxDepartment;
}
