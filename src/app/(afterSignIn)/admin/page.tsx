import EventCalendar from "@/components/EventCalendar";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col lg:flex-row">
      {/* Left Section */}
      <div className="w-full flex flex-col gap-8">
        <div className="p-6 bg-white rounded-md shadow-md">
          Welcome back Admin!
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[700px] flex flex-col gap-8">
        <EventCalendar />
      </div>
    </div>
  );
}

export default AdminPage;