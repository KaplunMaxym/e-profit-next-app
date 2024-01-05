import s from '@/modules/employment/employment.module.scss'

const Employment = () => {
    return (
        <div className={s.container}>
            <div>
                <div className={s.title}>Зайнятість</div>
                <div>
                    <div><input type={'checkbox'}/> <span className={s.full}>Повна</span></div>
                    <div><input type={'checkbox'}/> <span className={s.part}>Неповна</span></div>
                    <div><input type={'checkbox'}/> <span className={s.remotely}>Дистанційна</span></div>
                </div>
            </div>
            <div>
                <div className={s.title}>Зарплата</div>
                <div>
                    <div style={{marginBottom: 5}}><span className={s.fromTo}>від</span><input className={s.input} /></div>
                    <div><span className={s.fromTo}>до</span><input className={s.input} /></div>
                </div>
            </div>
        </div>
    );
};

export default Employment;