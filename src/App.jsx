import './index.css'
import { useState } from 'react'
import { FaAngleRight, FaAngleLeft, FaCopy } from 'react-icons/fa'
import { generatePassword } from './script.js'

export default function App() {
  const [sl, setSl] = useState(true)
  const [bl, setBl] = useState(false)
  const [sc, setSc] = useState(false)
  const [num, setNum] = useState(false)
  const [length, setLength] = useState(8)
  const [genPass, setGenPass] = useState('Generate New Password')
  const [isCopied, setIsCopied] = useState(false)

  const handleClick = () => {
    const res = generatePassword(sl, bl, sc, num, length)
    setGenPass(res)
  }

  const copyPassword = () => {
    navigator.clipboard.writeText(genPass)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-white '>
      <div className='flex flex-col items-center bg-gray-800 border-4 border-lime-300 rounded-lg max-w-xl px-10 py-5 mx-10'>
        <h1 className='text-4xl font-roboto text-lime-300 uppercase text-center font-bold pb-5 hover:text-lime-500 duration-300'>
          Password Generator
        </h1>
        <div className='mt-5 flex flex-col items-center justify-center min-w-full'>
          <div className='py-5 bg-white text-gray-600 min-w-full text-center rounded-lg relative flex justify-center items-center'>
            <div className='hover:text-lime-900 font-bold'>{genPass}</div>
            {genPass !== 'Generate New Password' && (
              <>
                <div className='absolute right-5'>
                  <FaCopy
                    className='hover:text-lime-900 cursor-pointer w-7 h-7'
                    onClick={() => copyPassword()}
                  />
                </div>
                {isCopied && (
                  <div className='absolute text-sm -bottom-7 text-lime-300'>
                    Password copied to your clipboard
                  </div>
                )}
              </>
            )}
          </div>
          <div className='flex space-x-5 my-10 '>
            <div>
              <div className='input-checkbox mb-10 '>
                <label htmlFor='sc'>Small Letters</label>
                <input
                  type='checkbox'
                  className='accent-lime-300 checkbox'
                  checked={sl}
                  onChange={(e) => setSl(e.target.checked)}
                />
              </div>
              <div className='input-checkbox'>
                <label htmlFor='sc'>Big Letters</label>
                <input
                  type='checkbox'
                  className='accent-lime-300 checkbox'
                  checked={bl}
                  onChange={(e) => setBl(e.target.checked)}
                />
              </div>
            </div>
            <div>
              <div className='input-checkbox mb-10'>
                <label htmlFor='sc'>Special Characters</label>
                <input
                  type='checkbox'
                  className='accent-lime-300 checkbox'
                  checked={sc}
                  onChange={(e) => setSc(e.target.checked)}
                />
              </div>
              <div className='input-checkbox'>
                <label htmlFor='sc'>Numbers</label>
                <input
                  type='checkbox'
                  className='accent-lime-300 checkbox'
                  checked={num}
                  onChange={(e) => setNum(e.target.checked)}
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center min-w-full'>
            <div className='flex items-center'>
              <FaAngleLeft
                className='w-8 h-8 hover:fill-lime-500'
                onClick={() => length > 0 && setLength(length - 1)}
              ></FaAngleLeft>
              <div className='mx-3 flex flex-col items-center'>
                <input
                  type='range'
                  name=''
                  id=''
                  min='1'
                  max='16'
                  step='1'
                  className='accent-lime-300 hover:accent-lime-500 min-w-full focus:accent-lime-500'
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                />
              </div>
              <FaAngleRight
                className='hover:fill-lime-500 w-8 h-8'
                onClick={() => {
                  length < 16 && setLength(length + 1)
                }}
              ></FaAngleRight>
            </div>
            <label htmlFor='range' className='font-bold'>
              {length}
            </label>
          </div>
          <button
            className='p-5 m-5 text-gray-800 font-bold bg-lime-300 rounded-xl hover:bg-lime-600 hover:text-white duration-300'
            onClick={handleClick}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  )
}
