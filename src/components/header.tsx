import { useValues } from '../assets/context';
import './header.css';

export default function Header() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const { selectedValue, index, setIndex } = useValues();
    let subject: string = '';
    let date: string = '';
        if(selectedValue) {
            subject = selectedValue[index].name;
            const dateValue = new Date(selectedValue[index].date);
            date = `${days[dateValue.getDay()]}, ${months[dateValue.getMonth()]} ${dateValue.getDate()}, ${dateValue.getFullYear()}`;
            console.log('changed')
        }
        const handlePrev = (): void => {
            if(selectedValue) {
                if(index === 0) {
                    setIndex(selectedValue.length - 1);
                    // currentPage = selectedValue?.length;
                } else {
                    setIndex(index - 1);
                }
            }
        }
        const handleNext = (): void => {
            if(selectedValue) {
                if(index === selectedValue.length - 1) {
                    setIndex(0);
                    // currentPage = selectedValue?.length;
                } else {
                    setIndex(index + 1);
                }
            }
        }
    return(
        <header className='container-fluid'>
        <nav className="px-4 section-header row justify-content-between">
            <button type='button' className="btn btn--prev align-self-md-center p-3 text-center col-2" onClick={handlePrev}>⬅️ Previous Day</button>
            <div className = 'header-title center-text my-2 col-8'>
            <h1 className="primary">
                {date || 'Select Course'}
            </h1>
            <p className="header-subheading">
                Day 1 of 15 • {subject} Module • Weekdays Only
            </p>
            </div>
            <button type='button' className="btn btn--next align-self-md-center p-3 col-2" onClick={handleNext}>Next Day ➡️</button>
        </nav>
        </header>
    )
}