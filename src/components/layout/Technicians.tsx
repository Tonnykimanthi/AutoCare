// Components
import SectionTitle from "../ui/SectionTitle";
// Constants
import techniciansList from "../../constants/techniciansList";
import Technician from "../ui/Technician";

const Technicians = () => {
  return (
    <section className="mt-5 p-5 max-sm:px-2">
      <SectionTitle text="Our Expert Technicians" />
      <div className="mt-4 grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 place-items-center">
        {techniciansList.map((technician, index) => (
          <Technician technician={technician} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Technicians;
