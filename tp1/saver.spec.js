import { describe, test, expect, vi } from 'vitest'
import { getTeaByName, saveTea, generateNewTeaId } from './saver.js'
import fs from 'node:fs'

vi.mock('node:fs')

// Mock des fonctions `readFileSync`, `writeFileSync` et `existsSync`
const mockData = JSON.stringify([{ id: 1, name: 'Green Tea', description: 'Refreshing' }])
fs.existsSync.mockReturnValue(true)
fs.readFileSync.mockReturnValue(mockData)

describe('getTeaByName', () => {
  test('should return the correct tea when a valid name is provided', () => {
    const tea = getTeaByName('Green Tea')
    expect(tea).toEqual({ id: 1, name: 'Green Tea', description: 'Refreshing' })
  })

  test('should return undefined if the tea name does not exist', () => {
    const tea = getTeaByName('Black Tea')
    expect(tea).toBeUndefined()
  })

  test('should handle empty or invalid name gracefully', () => {
    const tea = getTeaByName('')
    expect(tea).toBeUndefined()
  })
})

describe('saveTea', () => {
  test('should save a new tea if id and name are unique', () => {
    const newTea = { id: 2, name: 'Black Tea', description: 'Strong and bold' }
    saveTea(newTea)
    expect(fs.writeFileSync).toHaveBeenCalled()
  })

  test('should throw an error if a tea with the same name but different id already exists', () => {
    const duplicateNameTea = { id: 3, name: 'Green Tea', description: 'Duplicate name' }
    expect(() => saveTea(duplicateNameTea)).toThrowError(/Tea with name Green Tea already exists/)
  })

  test('should replace an existing tea if id matches', () => {
    const updatedTea = { id: 1, name: 'Green Tea', description: 'Updated description' }
    saveTea(updatedTea)
    expect(fs.writeFileSync).toHaveBeenCalled()
  })
})

describe('generateNewTeaId', () => {
  test('should generate a valid numeric id', () => {
    const id = generateNewTeaId()
    expect(typeof id).toBe('number')
  })


    test('should generate unique ids on successive calls', () => {
    vi.useFakeTimers()
    const id1 = generateNewTeaId()
    
    // Avancer le temps de 1 milliseconde
    vi.advanceTimersByTime(1)

    const id2 = generateNewTeaId()

    expect(id1).not.toBe(id2)
    })

    vi.useRealTimers()  
})
