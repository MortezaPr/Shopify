"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Forms = (form: string, register: any) => {
  if (form == "phone") {
    return (
      <div className="grid gap-4">
        <div className="flex items-center gap-5">
          <Label htmlFor="resolution" className="text-right">
            رزولوشن
          </Label>
          <Input id="resolution" className="w-64" {...register("resolution")} />
        </div>
        <div className="flex items-center gap-5">
          <Label htmlFor="screen_tech" className="text-right">
            تکنولوژی صفحه نمایش
          </Label>
          <Input
            id="screen_tech"
            className="w-64"
            {...register("screen_tech")}
          />
        </div>
        <div className="flex items-center gap-5">
          <Label htmlFor="os_version" className="text-right">
            نسخه سیستم عامل
          </Label>
          <Input id="os_version" className="w-64" {...register("os_version")} />
        </div>
        <div className="flex items-center gap-5">
          <Label htmlFor="size" className="text-right">
            اندازه
          </Label>
          <Input id="size" className="w-64" {...register("size")} />
        </div>
      </div>
    );
  } else if (form == "laptop") {
    return (
      <div className="grid gap-4">
        {" "}
        <div className="flex items-center gap-5">
          <Label htmlFor="processor" className="text-right">
            پردازنده
          </Label>
          <Input id="processor" className="w-64" {...register("processor")} />
        </div>
        <div className="flex items-center gap-5">
          <Label htmlFor="ram" className="text-right">
            رم
          </Label>
          <Input id="ram" className="w-64" {...register("ram")} />
        </div>
        <div className="flex items-center gap-5">
          <Label htmlFor="internalMemory" className="text-right">
            حافظه داخلی
          </Label>
          <Input
            id="internalMemory"
            className="w-64"
            {...register("internalMemory")}
          />
        </div>
        <div className="flex items-center gap-5">
          <Label htmlFor="gpu" className="text-right">
            کارت گرافیک
          </Label>
          <Input id="gpu" className="w-64" {...register("gpu")} />
        </div>
      </div>
    );
  }
};

export default Forms;
