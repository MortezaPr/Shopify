import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LuPencilLine } from "react-icons/lu";

interface InfoCardProps {
  title: string;
  value: string;
  myClass: string;
  InfoForm: JSX.Element;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  value,
  myClass,
  InfoForm,
}) => {
  return (
    <div className={`w-96 h-28 border-2 border-gray-300 ${myClass}`}>
      <div className="pt-3 pr-4 flex justify-between items-center">
        <div>
          <p className="text-gray-400">{title}</p>
          <p className="pt-4 font-bold">{value}</p>
        </div>

        <Dialog>
          <DialogTrigger>
            <div className="pl-5 cursor-pointer">
              <LuPencilLine size={22} />
            </div>
          </DialogTrigger>
          <DialogContent>{InfoForm}</DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default InfoCard;
