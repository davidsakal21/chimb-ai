"use client"

import type React from "react"

import { useState, useRef } from "react"
import { FileText, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface FileUploaderProps {
  file: File | null
  onFileChange: (file: File | null) => void
}

export function FileUploader({ file, onFileChange }: FileUploaderProps) {
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0]
      if (droppedFile.type === "application/pdf") {
        onFileChange(droppedFile)
      } else {
        alert("Please upload a PDF file")
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.target.files && e.target.files[0]) {
      onFileChange(e.target.files[0])
    }
  }

  const handleClick = () => {
    inputRef.current?.click()
  }

  const removeFile = () => {
    onFileChange(null)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  return (
    <Card className={`border-2 border-dashed ${dragActive ? "border-gray-400 bg-gray-50" : "border-gray-200"}`}>
      <CardContent className="p-6">
        <div
          className="flex flex-col items-center justify-center"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {file ? (
            <div className="w-full">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="h-8 w-8 text-gray-500" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{file.name}</p>
                    <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={removeFile} className="text-gray-500 hover:text-gray-700">
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ) : (
            <>
              <input ref={inputRef} type="file" accept="application/pdf" onChange={handleChange} className="hidden" />
              <div className="flex flex-col items-center justify-center py-6 space-y-4">
                <div className="p-3 bg-gray-50 rounded-full">
                  <Upload className="h-8 w-8 text-gray-500" />
                </div>
                <div className="text-center space-y-2">
                  <p className="text-base font-medium">Drag and drop your pitch deck</p>
                  <p className="text-sm text-gray-500">
                    or{" "}
                    <button type="button" onClick={handleClick} className="text-gray-900 font-medium underline">
                      browse files
                    </button>
                  </p>
                  <p className="text-xs text-gray-500">PDF files only (max 10MB)</p>
                </div>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

