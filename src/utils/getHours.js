export const getTime = (timestamp) => {
  const date = new Date(timestamp * 1000);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  //   const addZero = (num) =>{
  //     num.length === 1 ? num=
  //   }

  return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
};
