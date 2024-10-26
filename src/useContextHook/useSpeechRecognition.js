import React, { useEffect } from 'react'
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'

export const useSpeechRecognitions = (setSearchQuery) => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition()

    useEffect(() => {
        if(transcript){
            setSearchQuery(transcript)
        }
    },[transcript,setSearchQuery])

    const startListening = () => SpeechRecognition.startListening({continuous: true})
    const stopListening = () => {
        SpeechRecognition.stopListening()
        resetTranscript()
    }
    return{
        transcript,
        listening,
        startListening,
        stopListening,
        browserSupportsSpeechRecognition
    }
}