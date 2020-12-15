import React from "react";
import { getMonth, getYear } from "date-fns";
import { Redirect } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import Frame from "../../templates/Frame";
import MonthlyInfos from "../../molecules/MonthlyInfos";
import Select from "../../atoms/Select";

const Home = ({
  match: {
    params: { year: pathYear, month: pathMonth }
  },
  history
}: RouteComponentProps<{ year: string; month: string }>) => {
  if (!pathYear || !pathMonth || !Number(pathYear) || !Number(pathMonth)) {
    const now = new Date();
    return (
      <Redirect
        to={`/zaitacount-frontend/${getYear(now)}/${getMonth(now) + 1}`}
      />
    );
  }

  const year = Number(pathYear);
  const range = 10;
  const yearOptions = Array(range)
    .fill(null)
    .map((_, i) => year + range / 2 - i);
  const month = Number(pathMonth);
  const monthOptions = Array(12)
    .fill(null)
    .map((_, i) => i + 1);

  const changeReportedOn = (y: string, m: string) => {
    history.push(`/zaitacount-frontend/${y}/${m}`);
  };

  return (
    <Frame>
      <>
        <div className="my-3 p-3 bg-white rounded shadow">
          <div className="border-gray mb-0">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="year">Year</label>

                <Select
                  className="custom-select d-block w-100"
                  id="year"
                  value={pathYear}
                  options={yearOptions}
                  onChange={(e) => changeReportedOn(e.target.value, pathMonth)}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="month">Month</label>

                <Select
                  className="custom-select d-block w-100"
                  id="month"
                  value={pathMonth}
                  options={monthOptions}
                  onChange={(e) => changeReportedOn(pathYear, e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-3 p-3 bg-white rounded shadow">
          <MonthlyInfos year={year} month={month} />
        </div>
      </>
    </Frame>
  );
};

export default Home;
