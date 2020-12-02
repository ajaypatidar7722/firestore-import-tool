export const SHOW_NOTIFICATION = 'app/SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'app/HIDE_NOTIFICATION';

export const showNotification = (message, variant = 'success') => ({
  type: SHOW_NOTIFICATION,
  data: {
    message,
    variant,
  },
});

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION,
});
