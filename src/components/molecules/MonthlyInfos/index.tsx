import React from "react";
import { useMonthlyInfosQuery } from "../../../generated/graphql";

interface Props {
  year: number;
  month: number;
}

const MonthlyInfos = ({ year, month }: Props) => {
  const { loading, data } = useMonthlyInfosQuery({
    fetchPolicy: "network-only",
    variables: { year, month }
  });

  if (loading) {
    return <>Loading...</>;
  }

  const monthlyInfos = data?.monthlyInfos;

  if (!monthlyInfos?.length) {
    return <>No Data</>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="border-0">名前</th>
          <th className="border-0">在宅数</th>
          <th className="border-0">定期購入</th>
          <th className="border-0">交通費</th>
        </tr>
      </thead>
      <tbody>
        {monthlyInfos &&
          monthlyInfos.map((monthlyInfo, i) => {
            const amount = monthlyInfo?.amount;
            const purchased = monthlyInfo?.purchased;
            const workFromHomeCount = monthlyInfo?.workFromHomeCount;
            const name = monthlyInfo?.lineUser.fixedProfile.name;

            return (
              <tr key={i}>
                <td>{name}</td>
                <td>{workFromHomeCount} 回</td>
                <td>{purchased === "YES" ? "有" : "無"}</td>
                <td>{amount} 円</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default MonthlyInfos;
