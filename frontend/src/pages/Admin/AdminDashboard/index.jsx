import { useContext } from "react";
import { Link } from "react-router-dom";
import getAdminDashboardOptions from "../../../assets/adminDashboardOptions";
import PageFadeTransitionContainer from "../../../components/PageFadeTransitionContainer";
import { AdminContext } from "../../../contexts/adminContext";
import useTitle from "../../../hooks/useTitle";
import NumberCounter from "../../../components/NumberCounter";

export default function AdminDashboard() {
  const { admin } = useContext(AdminContext);
  const dashboardData = getAdminDashboardOptions(admin);
  useTitle("Admin Dashboard | Elegant Apparels");

  return (
    <PageFadeTransitionContainer className="min-h-100vh relative pt-12">
      <div className="dashboard relative h-full">
        <div className="bg-gray-400 text-white text-center my-2">
          <span>Welcome to Elegant Apparels, {admin.name ?? "Admin"}</span>
        </div>
        <div className="dashboard-options grid grid-cols-1 md:grid-cols-3 auto-rows-fr items-center max-w-1200 mx-auto my-6 gap-4">
          {dashboardData.map((option, index) => (
            <Link to={option.path} key={index} className="h-full">
              <div className="dashboard-option bg-gray-200 h-full rounded-sm p-8 md:px-12 md:py-8 mx-4 text-gray-500">
                <div
                  style={{
                    color: `${option.accentColor}`,
                  }}
                  className="dashboard-option-heading flex justify-between text-2xl font-medium"
                >
                  <span className="dashboard-option-title">{option.title}</span>
                  <span className="dashboard-option-icon">
                    <i className={option.icon}></i>
                  </span>
                </div>
                <span className="dashboard-option-subheading text-lg inline-block my-2">
                  {option.subHeading}
                </span>
                <div className="dashboard-option-content">
                  {option.subOptions &&
                    option.subOptions.map((subOption, index) => (
                      <div
                        className="dashboard-option-content-item flex justify-between text-3/4xl"
                        key={index}
                      >
                        <span className="dashboard-option-content-item-title">
                          {subOption.title}
                        </span>
                        <NumberCounter
                          className="dashboard-option-content-item-value"
                          to={parseInt(subOption.value)}
                          from={0}
                          duration={2}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageFadeTransitionContainer>
  );
}