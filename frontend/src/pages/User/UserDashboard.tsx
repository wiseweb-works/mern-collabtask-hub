import { useContext, useEffect, useState } from "react";
import { useUserAuth } from "../../hooks/useUserAuth";
import { UserContext } from "../../context/UserContext";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATH } from "../../utils/apiPath";
import moment from "moment";
import { IoMdCard } from "react-icons/io";
import { addThousandSeperator } from "../../utils/helper";
import InfoCard from "../../components/Cards/InfoCard";
import { LuArrowRight } from "react-icons/lu";
import { useNavigate } from "react-router";
import TaskListTable from "../../components/TaskListTable";
import CustomPieChart from "../../components/Charts/CustomPieChart";
import CustomBarChart from "../../components/Charts/CustomBarChart";

const COLORS = ["#8D51FF", "#00B8DB", "#7BCE00"];

const UserDashboard = () => {
  useUserAuth();

  const { user } = useContext(UserContext) as {
    user: { name?: string; token: string } | null;
  };
  const navigate = useNavigate();

  interface DashboardData {
    charts?: {
      taskDistribution?: {
        All?: number;
        Pending?: number;
        InProgress?: number;
        Completed?: number;
      };
      taskPriorityLevels?: {
        Low?: number;
        Medium?: number;
        High?: number;
      };
    };
    recentTasks?: Array<string>;
  }

  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );
  const [pieChartData, setPieChartData] = useState<TaskDistributionData[]>([]);
  const [barChartData, setBarChartData] = useState<PriorityLevelData[]>([]);

  interface TaskDistribution {
    Pending: number;
    InProgress: number;
    Completed: number;
  }

  interface TaskPriorityLevels {
    Low: number;
    Medium: number;
    High: number;
  }

  interface TaskDistributionData {
    status: string;
    count: number;
  }

  interface PriorityLevelData {
    priority: string;
    count: number;
  }

  const prepareChartData = (
    data: {
      taskDistribution?: TaskDistribution;
      taskPriorityLevels?: TaskPriorityLevels;
    } | null
  ) => {
    const taskDistribution = data?.taskDistribution || null;
    const taskPriorityLevel = data?.taskPriorityLevels || null;

    const taskDistributionData: TaskDistributionData[] = [
      { status: "Pending", count: taskDistribution?.Pending || 0 },
      { status: "In Progress", count: taskDistribution?.InProgress || 0 },
      { status: "Completed", count: taskDistribution?.Completed || 0 },
    ];

    setPieChartData(taskDistributionData);

    const PriorityLevelData: PriorityLevelData[] = [
      { priority: "Low", count: taskPriorityLevel?.Low || 0 },
      { priority: "Medium", count: taskPriorityLevel?.Medium || 0 },
      { priority: "High", count: taskPriorityLevel?.High || 0 },
    ];

    setBarChartData(PriorityLevelData);
  };

  const getDashboardData = async () => {
    try {
      const response = await axiosInstance.get(
        API_PATH.TASKS.GET_USER_DASHBOARD_DATA
      );
      if (response.data) {
        setDashboardData(response.data);
        prepareChartData(response.data?.charts || null);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const onSeeMore = () => {
    navigate("/admin/tasks");
  };

  useEffect(() => {
    getDashboardData();

    return () => {};
  }, []);

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="card my-5">
        <div>
          <div className="col-span-3">
            <h2 className="text-xl md:text-2xl">
              Good Morning! {user?.name || "User"}
            </h2>
            <p className="text-xs md:text-[13px] text-gray-400 mt-1.5">
              {moment().format("dddd Do MM YYYY")}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-5">
          <InfoCard
            icon={<IoMdCard />}
            label="Total Tasks"
            value={addThousandSeperator(
              dashboardData?.charts?.taskDistribution?.All || 0
            )}
            color="bg-primary"
          />

          <InfoCard
            icon={<IoMdCard />}
            label="Pending Tasks"
            value={addThousandSeperator(
              dashboardData?.charts?.taskDistribution?.Pending || 0
            )}
            color="bg-violet-500"
          />

          <InfoCard
            icon={<IoMdCard />}
            label="In Progress Tasks"
            value={addThousandSeperator(
              dashboardData?.charts?.taskDistribution?.InProgress || 0
            )}
            color="bg-cyan-500"
          />

          <InfoCard
            icon={<IoMdCard />}
            label="Completed Tasks"
            value={addThousandSeperator(
              dashboardData?.charts?.taskDistribution?.Completed || 0
            )}
            color="bg-lime-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 md:my-6">
        <div>
          <div className="card">
            <div className="flex items-center justify-between">
              <h5 className="font-medium">Task Distribution</h5>
            </div>

            <CustomPieChart data={pieChartData} colors={COLORS} />
          </div>
        </div>

        <div>
          <div className="card">
            <div className="flex items-center justify-between">
              <h5 className="font-medium">Task Priority Levels</h5>
            </div>

            <CustomBarChart data={barChartData} />
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="card">
            <div className="flex items-center justify-between">
              <h5 className="text-lg">Recent Tasks</h5>

              <button className="card-btn" onClick={onSeeMore}>
                See All <LuArrowRight className="text-base" />
              </button>
            </div>
            <TaskListTable tableData={dashboardData?.recentTasks || []} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;
