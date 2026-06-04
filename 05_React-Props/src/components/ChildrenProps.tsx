import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title: string;
  color?: "blue" | "green" | "purple" | "red";
}

interface ContainerProps {
  children: ReactNode;
  layout?: "vertical" | "horizontal" | "grid";
}

function Card({ children, title, color = "blue" }: CardProps) {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-50",
    green: "border-green-500 bg-green-50",
    purple: "border-purple-500 bg-purple-50",
    red: "border-red-500 bg-red-50",
  };

  return (
    <div
      className={`flex flex-1 flex-col border-l-4 p-6 ${colorClasses[color]} rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl`}
    >
      {title && (
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      )}
      <div className="flex-1 space-y-1 text-gray-700">{children}</div>
    </div>
  );
}

function Container({ children, layout = "vertical" }: ContainerProps) {
  const layoutClasses = {
    vertical: "flex flex-col gap-4",
    horizontal: "flex flex-col md:flex-row gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  };
  return <div className={layoutClasses[layout]}>{children}</div>;
}

const ChildrenProps = () => {
  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2>ChildrenProps</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
        voluptas nulla, minus dolores nobis nam.
      </p>
      <div className="space-y-6">
        <div className="">
          <h3>Card component with children</h3>
          <Container layout="horizontal">
            <Card title="stats" color="blue">
              <p className="mb-2">
                <strong>Name:</strong>
                Hasan Zaidi
              </p>
              <p className="mb-2">
                <strong>Emai:</strong>
                xhaidi@gmial.com
              </p>
              <p className="mb-2">
                <strong>Role:</strong>
                Devloper/Instructor
              </p>
            </Card>
            <Card title="User Profile" color="green">
              <p className="mb-2">
                <strong>Name:</strong>
                Hasan Zaidi
              </p>
              <p className="mb-2">
                <strong>Emai:</strong>
                xhaidi@gmial.com
              </p>
              <p className="mb-2">
                <strong>Role:</strong>
                Devloper/Instructor
              </p>
            </Card>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default ChildrenProps;
