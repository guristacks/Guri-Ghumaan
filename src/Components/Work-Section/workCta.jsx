import React from "react";
import { MoveUpRight } from "lucide-react";

const WorkCta = () => {
  return (
    <div className="workCta flex jc ac">
      <a className="primaryBtn flex" href="#">
        More work <sup>17</sup> <MoveUpRight size={14} strokeWidth={2} />
      </a>
    </div>
  );
};

export default WorkCta;
