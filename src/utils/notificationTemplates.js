// Renders a customer-configured notification message template using
// the fields from the incoming webhook payload, so customers can
// customize alert text like "Order ${data.orderId} just shipped!".

export function renderTemplate(template, data) {
  // eslint-disable-next-line no-new-func
  const render = new Function('data', `return \`${template}\`;`);
  return render(data);
}