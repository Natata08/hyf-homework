export const searchByKeyword = (array, keyword) => {
  return array.filter((obj) =>
    Object.values(obj).some((item) =>
      item.toString().toLowerCase().includes(keyword.toLowerCase())
    )
  );
};

export const searchById = (array, id) => array.find((obj) => obj.id === id);

export const filterArrayByFields = (array, fields) => {
  const fieldKeys = Object.keys(fields);
  return array.filter((obj) =>
    fieldKeys.every(
      (key) =>
        obj[key] &&
        obj[key].toString().toLowerCase() ===
          fields[key].toString().toLowerCase()
    )
  );
};
