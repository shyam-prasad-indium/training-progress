    import { mockData, subject, type schedule } from '../assets/mockData'
    import './content.css'
    import '../App.css'
    import { useValues } from '../assets/context'
    import { useEffect, useState } from 'react';

    export default function Content() {
        const { selectedValue, setSelectedValue, index } = useValues();
        const [currentPage, setCurrentPage] = useState<schedule | undefined>(undefined);
        const handleSelected = (event: string) => {
            const filteredSubject = mockData.filter((e) => e.name === event)
            setSelectedValue(filteredSubject);
        }
        useEffect(() => {
            if(selectedValue) {
                setCurrentPage(selectedValue[index]);
                tableContainer();
                console.log(currentPage)
                console.log(currentPage?.topic)
            }
        },[selectedValue, index])
        console.log(index)
        const tableContainer = () => {
            let borderClass = '';
            return(
                <table className="table-container">
                <thead>
                    <tr>
                        <th className= 'table-header'>⏰Start Time</th>
                        <th className= 'table-header'>🏁End Time</th>
                        <th className= 'table-header'>⏱️Duration</th>
                        <th className= 'table-header'>📂Category</th>
                        <th className= 'table-header'>📚Topic</th>
                        <th className= 'table-header'>📝Description</th>
                        <th className= 'table-header'>🧑‍🏫Trainer</th>
                    </tr>
                </thead>
                <tbody>
                {currentPage?.topic.map((item, index) => {
                    item === 'Excercise' ? borderClass = 'col-border-danger' : borderClass = '';
                    return item === 'break' ? 
                    (
                    <tr key={index}>
                        <td className= 'table-data col--1 col-success success-text col-border-success'><strong>{currentPage?.timing[index][0]}</strong></td>
                        <td className= 'table-data col--2 col-success success-text col-border-success'><strong>{currentPage?.timing[index][1]}</strong></td>
                        <td className= 'table-data col--3 col-danger success-text col-border-success'><strong>  {currentPage?.duration[index]} min</strong></td>
                        <td className= 'table-data col--3 col-success success-text' colSpan={4}><strong>☕Break Time - Refreshments & Networking</strong></td>
                    </tr>
                    ) : (
                        <tr key={index}>
                        <td className= {`table-data col--1 col-success success-text ${borderClass}`}><strong>{currentPage?.timing[index][0]}</strong></td>
                        <td className= {`table-data col--2 col-success success-text ${borderClass}`}><strong>{currentPage?.timing[index][1]}</strong></td>
                        <td className= {`table-data col--3 col-danger danger-text ${borderClass}`}><strong>{currentPage?.duration[index]} min</strong></td>
                        <td className= {`table-data col--4 col-primary ${borderClass}`}><strong>{currentPage?.category[index] || '-'}</strong></td>
                        <td className= {`table-data col--5 ${borderClass}`}>{item}</td>
                        <td className= {`table-data col--6 ${borderClass}`}>{currentPage?.description[index] || '-'}</td>
                        <td className= {`table-data col--7 ${borderClass}`}>{currentPage?.trainer[index]}</td>
                    </tr>
                    )}
                )}
                </tbody>
                </table>
            )
        }
        return(
            <main className="container px-4">
            <section className="section-container my-5 p-4" id = 'overview'>
                <h3 className='text-center section-heading p-2' id = 'overview-heading'>📅Training Progress Overview - Weekdays Only (Mon-Fri)</h3>
                    <div className="section-boxes p-2 row justify-content-center" id = 'overview-boxes'>
                        {subject.map((item, index) => (
                            <div key = {index} className="section-box overview-box text-center m-2 col-md col-sm-5" onClick={() => handleSelected(item)} data-subject = {index}>
                            <h3 className="section-box--title overview-title">{item}</h3>
                            <p className="section-box--progress overview-progress">Not Started</p>
                        </div>
                        ))}
                    </div>
            </section>
            {selectedValue && 
                <section className="section-container my-5 p-4" id  = 'subject'>
                <h3 className="text-center section-heading p-2" id = 'subject-heading'>📚 {selectedValue[0].name} - Monday, June 2, 2025</h3>
                    <div className="section-boxes p-4 row justify-content-center gap-2">
                        <div className="section-box p-2 align-items-between text-center subject-box col-md col-sm-5">
                            <p className="section-box--progress subject-progress">⏰Session Time</p>
                            <h3 className="section-box--title subject-title">{selectedValue[0].timing[0][0]}AM - {selectedValue[0].timing[selectedValue[0].timing.length -1][1]}PM</h3>
                        </div>
                        <div className="section-box p-2 align-items-between text-center subject-box col-md col-sm-5">
                            <p className="section-box--progress subject-progress">📅 Schedule</p>
                            <h3 className="section-box--title subject-title">Weekdays Only</h3>
                        </div>
                        <div className="section-box p-2 align-items-between text-center subject-box col-md col-sm-5">
                            <p className="section-box--progress subject-progress">📖 Topics Covered</p>
                            <h3 className="section-box--title subject-title" id ="subject-topic-covered">{selectedValue[0].topic.length - 1}</h3>
                        </div>
                        <div className="section-box p-2 align-items-between text-center subject-box col-md col-sm-5">
                            <p className="section-box--progress subject-progress">🏃‍♂️Excercises</p>
                            <h3 className="section-box--title subject-title" id = "subject-excercises">{selectedValue[0].topic.filter((e) => e.includes('Excercise')).length}</h3>
                        </div>
                        <div className="section-box p-2 align-items-between text-center subject-box col-md col-sm-5">
                            <p className="section-box--progress subject-progress">⚡Active Learning</p>
                            <h3 className="section-box--title subject-title" id = "subject-active-learning">{selectedValue[0].activeLearning} mins</h3>
                        </div>
                    </div>
            </section>}
            <section className="section-container my-5 table-responsive" id="table">
                {selectedValue && tableContainer()}
            </section>
        </main>
        )
    }