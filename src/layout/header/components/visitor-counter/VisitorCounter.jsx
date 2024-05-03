import { HiUser } from "react-icons/hi";
import "./visitor-counter.scss";
import { useVisitorCount } from "../../../../hooks/useVisitorCount";

const VisitorCounter = () => {
  const { visitorCount } = useVisitorCount();
  return (
    <div className="visitor-counter">
      <HiUser />
      <span>{visitorCount}</span>
    </div>
  );
};

export default VisitorCounter;
