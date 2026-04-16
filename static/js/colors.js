function loadColors(params) {
  const rootStyles = getComputedStyle(document.documentElement);
  const colorSuccess = rootStyles.getPropertyValue('--color-success').trim();
  const colorWarning = rootStyles.getPropertyValue('--color-warning').trim();
  const colorError = rootStyles.getPropertyValue('--color-error').trim();
  const colorOffline = rootStyles.getPropertyValue('--status-offline').trim();
  const textColor = rootStyles.getPropertyValue('--text-secondary').trim();

  return {
    colorSuccess,
    colorWarning,
    colorError,
    colorOffline,
    textColor
  }
}
