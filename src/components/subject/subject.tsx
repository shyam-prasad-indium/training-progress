import type { FC } from "react";
import type { schedule } from "../../assets/mockData";
import '../../App.css'
import './subject.css'

type SubjectProps = {
    selectedValue: schedule[]
}
export const SubjectSection: FC<SubjectProps> = ({selectedValue}) => {
    return(
        <section className="section-container my-5 p-4" id  = 'subject'>
                <h3 className="text-center section-heading p-2" id = 'subject-heading'><strong>📚 {selectedValue[0].name} - Monday, June 2, 2025</strong></h3>
                    <div className="p-4 row justify-content-center gap-2">
                        <div className="section-box p-3 text-center col-md-auto col-sm-5">
                            <p className="subheading">⏰Session Time</p>
                            <h3 className="section-box--title" id = "subject-title"><strong>{selectedValue[0].timing[0][0]}AM - {selectedValue[0].timing[selectedValue[0].timing.length -1][1]}PM</strong></h3>
                        </div>
                        <div className="section-box p-3 text-center col-md col-sm-5">
                            <p className="subheading">📅 Schedule</p>
                            <h3 className="section-box--title" id = "subject-title"><strong>Weekdays Only</strong></h3>
                        </div>
                        <div className="section-box p-3 text-center col-md col-sm-5">
                            <p className="subheading">📖 Topics Covered</p>
                            <h3 className="section-box--title" id ="subject-title"><strong>{selectedValue[0].topic.length - 1}</strong></h3>
                        </div>
                        <div className="section-box p-3 text-center col-md col-sm-5">
                            <p className="subheading">🏃‍♂️Excercises</p>
                            <h3 className="section-box--title" id = "subject-title"><strong>{selectedValue[0].topic.filter((e) => e.includes('Excercise')).length}</strong></h3>
                        </div>
                        <div className="section-box p-3 text-center col-md col-sm-5">
                            <p className="subheading">⚡Active Learning</p>
                            <h3 className="section-box--title" id = "subject-title"><strong>{selectedValue[0].activeLearning} mins</strong></h3>
                        </div>
                    </div>
            </section>
    )
}