import { useBoard } from '../contexts/BoardContext';
import { Piece } from '../types/global';
import { blackBishop, blackKing, blackKnight, blackRook, whiteBishop, whiteKing, whiteKnight, whiteQueen, whiteRook } from '../utils/ChessPieces';

const whitePieces = [whiteBishop,whiteKnight,whiteRook,whiteKing]
const blackPieces = [blackBishop,blackKnight,blackRook,blackKing]


const ToastContent = (props:{color:string,xcord:number,ycord:number})=>{

    const { boardState, setBoardState } = useBoard();

    function promotePiece(pieceRef:string,xcord:number,ycord:number){
        console.log(pieceRef,xcord,ycord)
        const shallowCopy:Piece[][] = [...boardState]
        shallowCopy[ycord][xcord] = pieceRef;
        setBoardState(shallowCopy)
    }
    
    // show white piece toast if the pieces are white
        if(props.color==='white'){
            return(
                <div className='flex flex-col'>
                    <p className=' font-bold text-center'>Select a piece to promote pawn</p>
                    <div className='flex items-center justify-center'>
                        {whitePieces.map((imgsrc,index)=>{
                            return(
                                <img src={imgsrc} key={index} alt="" className=' w-12 h-12  hover:bg-green-400' onClick={(e)=>promotePiece(imgsrc,props.xcord,props.ycord)} />
                            )
                        })}
                    </div>
                </div>
            )
        }
        return(
            <div className='flex flex-col'>
                    <p className=' font-bold text-center'>Select a piece to promote pawn</p>
                    <div className='flex items-center justify-center'>
                        {blackPieces.map((imgsrc,index)=>{
                            return(
                                <img src={imgsrc} key={index} alt="" className=' w-12 h-12  hover:bg-green-400'  />
                            )
                        })}
                    </div>
                </div>
        )
    }


   

    export default ToastContent;