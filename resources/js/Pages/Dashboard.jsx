import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import styled from "styled-components";

const DashboardTitle = styled.h2`
  font-weight: bold;
  font-size: 24px;
`;

const DashboardContainer = styled.div`
  margin: 40px;
  padding: 40px;
  background-color: #fff;
`;
const DashboardContent = styled.div``;

export default function Dashboard(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      header={<DashboardTitle>Dashboard</DashboardTitle>}
    >
      <Head title="Dashboard" />

      <DashboardContainer>
        <DashboardContent>This is the github connection test</DashboardContent>
      </DashboardContainer>
    </AuthenticatedLayout>
  );
}
