import { getAvatar } from '../../utils/generateImages'

function FollowItem({ name, username }) {
    const avatar = getAvatar(`${name + Math.floor(Math.random() * 1000)}@email.com`)

    return (
        <div className='flex items-center justify-between py-3 hover:bg-gray-800'>
            <div className='flex items-center'>
                <img src={avatar} alt="user avatar" className='w-12 h-12 rounded-full mr-3' />
                <div>
                    <p className='font-bold'>{name}</p>
                    <p className='text-gray-500'>{username}</p>
                </div>


                <button className='bg-white text-black font-bold px-4 py-1 rounded-full ml-4 hover:bg-gray-300 transition duration-200'>follow</button>

            </div>
        </div>
    )
}

export default FollowItem
