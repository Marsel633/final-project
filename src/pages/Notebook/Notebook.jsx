import React from "react";
import {
  ScheduleComponent,
  Inject,
  Day,
  Week,
  WorkWeek,
  Agenda,
  Month,
} from "@syncfusion/ej2-react-schedule";
import { ProfileLayout, Title } from "../../components";
import styles from "./Notebook.module.scss"

class Notebook extends React.Component {
  render() {
    return (
      <ProfileLayout>
        <section className={styles.section}>
          <div className={styles.calendar}>
            <Title text="My Notebook" />
            <div className={styles.calendar__image}>
              <img
                src="https://st2.depositphotos.com/4060975/9111/v/450/depositphotos_91115432-stock-illustration-document-colored-vector-illustration.jpg"
                alt=""
              />
            </div>
          </div>
          <ScheduleComponent
            height={400}
            width="100%"
            selectedDate={new Date(2023, 0, 1)}
          >
            <Inject services={[Day, Week, Month, WorkWeek, Agenda]} />
          </ScheduleComponent>
        </section>
      </ProfileLayout>
    );
  }
}

export default Notebook;
