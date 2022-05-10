

export const TimeoutListener = (store) => (next) => (action) => {

   const Timeout = action?.meta?.timeout

   const set = setTimeout(() => {
      next(action)
   }, Timeout);

   return () => {
      clearTimeout(set)
   }
}