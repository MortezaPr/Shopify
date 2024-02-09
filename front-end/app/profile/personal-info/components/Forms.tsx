import { Input } from "@/components/ui/input";

const Forms = (
  form: string,
  handleSubmit: any,
  register: any,
  handleSubmitForm: any
) => {
  if (form == "name") {
    return (
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="grid gap-4 py-4 items-start">
          <div className="flex items-center gap-5">
            <label htmlFor="name" className="text-right">
              نام :
            </label>
            <Input
              className="w-60 py-2 dark:bg-dark-user"
              {...register("first_name")}
            />
          </div>
          <div className="flex items-center gap-5">
            <label htmlFor="name" className="text-right">
              نام خانوادگی :
            </label>
            <Input
              className="w-60 py-2 dark:bg-dark-user"
              {...register("last_name")}
            />
          </div>
          <div className="flex justify-end mt-5">
            <button
              type="submit"
              className="bg-my-purple text-white rounded-lg px-7 py-2"
            >
              ذخیره
            </button>
          </div>
        </div>
      </form>
    );
  } else if (form == "phone_number") {
    return (
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="grid gap-4 py-4 items-start">
          <div className="flex items-center gap-5">
            <label htmlFor="name" className="text-right">
              شماره موبایل :
            </label>
            <Input
              className="w-60 py-2 dark:bg-dark-user"
              {...register("phone_number")}
            />
          </div>
          <div className="flex justify-end mt-5">
            <button
              type="submit"
              className="bg-my-purple text-white rounded-lg px-7 py-2"
            >
              ذخیره
            </button>
          </div>
        </div>
      </form>
    );
  } else if (form == "email") {
    return (
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="grid gap-4 py-4 items-start">
          <div className="flex items-center gap-5">
            <label htmlFor="name" className="text-right">
              ایمیل :
            </label>
            <Input
              className="w-60 py-2 dark:bg-dark-user"
              {...register("email")}
            />
          </div>
          <div className="flex justify-end mt-5">
            <button
              type="submit"
              className="bg-my-purple text-white rounded-lg px-7 py-2"
            >
              ذخیره
            </button>
          </div>
        </div>
      </form>
    );
  } else if ((form = "password")) {
    return (
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="grid gap-4 py-4 items-start">
          <div className="flex items-center gap-5">
            <label htmlFor="name" className="text-right">
              رمز عبور قدیمی :
            </label>
            <Input
              className="w-60 py-2 dark:bg-dark-user"
              {...register("old_password")}
            />
          </div>
          <div className="flex items-center gap-5">
            <label htmlFor="name" className="text-right">
              رمز عبور جدید :
            </label>
            <Input
              className="w-60 py-2 dark:bg-dark-user"
              {...register("new_password")}
            />
          </div>
          <div className="flex items-center gap-5">
            <label htmlFor="name" className="text-right">
              تایید رمز عبور جدید :
            </label>
            <Input
              className="w-60 py-2 dark:bg-dark-user"
              {...register("new_password_confirmation")}
            />
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="bg-my-purple text-white rounded-lg px-7 py-2"
          >
            ذخیره
          </button>
        </div>
      </form>
    );
  }
};

export default Forms;
