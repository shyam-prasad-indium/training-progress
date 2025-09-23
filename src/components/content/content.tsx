    import { mockData, subject, type schedule } from '../../assets/mockData'
    import './content.css'
    import '../../App.css'
    import { useValues } from '../../assets/context'
    import { useEffect, useState } from 'react';
    import { SubjectSection } from '../subject/subject';
    import { TableSection } from '../table/table';

    export default function Content() {
        const { selectedValue, setSelectedValue, index } = useValues();
        const [currentPage, setCurrentPage] = useState<schedule | undefined>(undefined);
        const [activeBox, setActiveBox] = useState<number | undefined>(undefined);
        const handleSelected = (event: string, index: number) => {
            const filteredSubject = mockData.filter((e) => e.name === event)
            setSelectedValue(filteredSubject);
            setActiveBox(index)
        }
        useEffect(() => {
            if(selectedValue) {
                setCurrentPage(selectedValue[index]);
                console.log(currentPage)
                console.log(currentPage?.topic)
            }
        },[selectedValue, index])
        console.log(index)
        return(
            <main className="container px-4 py-1">
            <section className="section-container my-5 p-4" id = 'overview'>
                <h3 className='text-center section-heading p-2' id = 'overview-heading'><b>📅Training Progress Overview - Weekdays Only (Mon-Fri)</b></h3>
                    <div className="p-4 row justify-content-center">
                        {subject.map((item, index) => (
                            <div key = {index} className={`section-box p-3 m-2 col-md col-sm-5
                                ${activeBox === index ? 'active-box' : ''}`
                            }
                            onClick={() => handleSelected(item, index)} data-subject = {index}>
                            <h3 className="section-box--title" id = "overview-title"><b>{item}</b></h3>
                            <p className="subheading">Not Started</p>
                        </div>
                        ))}
                    </div>
            </section>
            {selectedValue && <SubjectSection selectedValue = {selectedValue}/>}
            {selectedValue && <TableSection currentPage = {currentPage} />}
        </main>
        )
    }