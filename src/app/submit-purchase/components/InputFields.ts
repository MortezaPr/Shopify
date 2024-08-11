const inputFields = [
  {
    inputName: "firstName",
    label: "نام",
  },
  {
    inputName: "lastName",
    label: "نام خانوادگی",
  },
  {
    inputName: "phoneNumber",
    label: "شماره موبایل",
    validation: {
      pattern: {
        value: /^(09\d{9}|۰۹[\u06F0-\u06F9]{9})$/,
        message: "شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد",
      },
    },
  },
  {
    inputName: "postalCode",
    label: "کد پستی",
    validation: {
      pattern: {
        value: /^(\d{10}|[\u06F0-\u06F9]{10})$/,
        message: "کد پستی باید ۱۰ رقم و بدون خط تیره باشد",
      },
    },
  },
];

export default inputFields;
