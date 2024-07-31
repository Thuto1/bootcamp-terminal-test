export default function findItemsOver(itemList, threshold) {
  return itemList.filter(item => item.qty > threshold);
}