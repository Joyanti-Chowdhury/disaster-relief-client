// import Container from '../../Components/ui/Container';
import Container from'../../../Components/ui/Container' 
import bannerImg from '../../../assets/banner-2.jpg';

const Banner = () => {
    return (
        <Container>
        <div className='relative'>
            <div className='mt-10'>
                 <img className='h-[500px] w-[100%] rounded-sm'  src={bannerImg} alt="" />
            </div>
            <div className='absolute top-[400px] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-5xl font-bold text-center mt-15 text-cyan-500'>Disaster Relief</h1>
                <p className='font-bold text-center mt-5 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sed mollitia esse laudantium totam molestias eos ea! Similique veritatis earum fugiat quam itaque laboriosam excepturi hic, cumque illo facere expedita.</p>
            </div>
        </div>
        </Container>
    );
};

export default Banner;