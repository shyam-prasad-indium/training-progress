import type { FC } from "react";
import type { schedule } from "../../assets/mockData";
import './table.css';
import '../../App.css'

type tableProps = {
    currentPage: schedule | undefined
}
export const TableSection: FC<tableProps> = ({currentPage}) => {
            let borderClass = '';
            return(
            <section className="section-container my-5 table-responsive">
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
                </section>
            )
        }