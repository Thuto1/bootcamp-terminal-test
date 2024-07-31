export default function findItemsOver20(itemList) {
  return itemList.filter(item => item.qty > 20);
}