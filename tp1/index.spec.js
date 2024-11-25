import { describe, test, expect, vi } from 'vitest'
import { addTea } from './index.js'
import * as saver from './saver.js'

// Mock des fonctions de saver.js
vi.mock('./saver.js')

describe('addTea', () => {
  test('should create a new tea if it does not exist', () => {
    saver.getTeaByName.mockReturnValue(undefined)
    saver.generateNewTeaId.mockReturnValue(12345)

    const result = addTea({ name: 'Herbal Tea', description: 'Soothing' })
    
    expect(result).toEqual({ success: true })
    expect(saver.saveTea).toHaveBeenCalledWith({ id: 12345, name: 'Herbal Tea', description: 'Soothing' })
  })

  test('should update an existing tea if it already exists', () => {
    saver.getTeaByName.mockReturnValue({ id: 1, name: 'Herbal Tea', description: 'Old description' })

    const result = addTea({ name: 'Herbal Tea', description: 'Updated description' })

    expect(result).toEqual({ success: true })
    expect(saver.saveTea).toHaveBeenCalledWith({ id: 1, name: 'Herbal Tea', description: 'Updated description' })
  })

  test('should return success false if saveTea throws an error', () => {
    // Désactiver la console d'erreur pour ce test
    const originalConsoleError = console.error
    console.error = vi.fn()
  
    saver.getTeaByName.mockReturnValue(undefined)
    saver.saveTea.mockImplementation(() => { throw new Error('Save failed') })
  
    const result = addTea({ name: 'Failing Tea', description: 'Should not be saved' })
  
    expect(result).toEqual({ success: false })
  
    // Restaurer la console d'erreur
    console.error = originalConsoleError
  })  
})
