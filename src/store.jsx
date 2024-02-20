import create from "zustand"

export const useRenderingState = create((set)=>({
    renderingState : {},
    setRenderingState : (new_val)=>(set(()=>({renderingState : new_val})))
}))
