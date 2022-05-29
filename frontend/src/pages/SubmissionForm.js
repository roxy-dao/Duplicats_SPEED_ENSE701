import { useEffect, useState } from 'react'
import { Box, Button, TextField, Typography } from '@material-ui/core'
import { postArticle } from '../services/ArticleServices'
import { getPractices } from '../services/PracticeServices'
import Dropdown from '../components/Dropdown'

const SubmissionForm = () => {
  const [title, setTitle] = useState('')
  const [authors, setAuthors] = useState('')
  const [source, setSource] = useState('')
  const [year, setYear] = useState('')
  const [doi, setDoi] = useState('')
  const [claim, setClaim] = useState('')
  const [evidence, setEvidence] = useState('')
  const [practices, setPractices] = useState([])
  const [selectedPractice, setSelectedPractice] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleReset = () => {
    setTitle('')
    setAuthors('')
    setSource('')
    setYear('')
    setDoi('')
    setClaim('')
    setEvidence('')
    setSelectedPractice('')
    setIsSubmitted(false)
  }

  const addArticle = () => {
    const article = {
      title: title,
      authors: authors,
      source: source,
      pubyear: year,
      doi: doi,
      claim: claim,
      evidence: evidence,
      sepractice: selectedPractice,
    }
    handleReset()
    setIsSubmitted(false)

    if (
      title !== '' &&
      authors !== '' &&
      source !== '' &&
      year !== '' &&
      doi !== '' &&
      claim !== '' &&
      evidence !== '' &&
      selectedPractice !== ''
    ) {
      postArticle(article)
        .then((data) => {
          setIsSubmitted(true)
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      alert('Please fill out all fields')
    }
  }

  useEffect(() => {
    getPractices()
      .then((data) => {
        const practices = data.map((practice) => practice.sepractice)
        setPractices(practices)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <Box
      style={{
        backgroundColor: '#f5f5f5',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        style={{
          width: '100%',
          display: 'flex',
          maxWidth: '300px',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h5" style={{ marginBottom: '0.5em' }}>
          Submit an Article
        </Typography>
        <TextField
          style={{ marginBottom: '1em' }}
          variant="outlined"
          value={title}
          label="Title"
          onChange={(e) => setTitle(e.target.value)}
        ></TextField>
        <TextField
          style={{ marginBottom: '1em' }}
          variant="outlined"
          value={authors}
          label="Authors"
          onChange={(e) => setAuthors(e.target.value)}
        ></TextField>
        <TextField
          style={{ marginBottom: '1em' }}
          variant="outlined"
          value={source}
          label="Source"
          onChange={(e) => setSource(e.target.value)}
        ></TextField>
        <TextField
          style={{ marginBottom: '1em' }}
          variant="outlined"
          value={year}
          label="Pub Year"
          onChange={(e) => setYear(e.target.value)}
        ></TextField>
        <TextField
          style={{ marginBottom: '1em' }}
          variant="outlined"
          value={doi}
          label="Doi"
          onChange={(e) => setDoi(e.target.value)}
        ></TextField>
        <TextField
          style={{ marginBottom: '1em' }}
          variant="outlined"
          value={claim}
          label="Claim"
          onChange={(e) => setClaim(e.target.value)}
        ></TextField>
        <TextField
          style={{ marginBottom: '1em' }}
          variant="outlined"
          value={evidence}
          label="Evidence"
          onChange={(e) => setEvidence(e.target.value)}
        ></TextField>
        <Dropdown
          dropdownList={practices}
          selected={selectedPractice}
          setSelected={setSelectedPractice}
          label="Select SE Practice"
        />
        <Button variant="outlined" style={{ marginBottom: '1em' }} onClick={addArticle}>
          Submit
        </Button>
        <Button variant="outlined" style={{ marginBottom: '2em' }} onClick={handleReset}>
          Reset
        </Button>
        {isSubmitted && (
          <Box
            style={{
              width: '100%',
              display: 'flex',
              maxWidth: '300px',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h5" style={{ marginBottom: '0.5em' }}>
              Article Submitted
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SubmissionForm
