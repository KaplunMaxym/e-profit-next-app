import s from '@/modules/Employment/employment.module.scss'

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
                <div className={s.salarySub}>
                    <div>
                        <div style={{marginBottom: 5}}><span className={s.fromTo}>від</span></div>
                        <div><span className={s.fromTo}>до</span></div>
                    </div>
                    <div>
                        <div><input className={s.input}/></div>
                        <div><input className={s.input}/></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Employment;