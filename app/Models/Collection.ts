import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Workspace from './Workspace'
import Resource from './Resource'

export default class Collection extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public workspaceId: number

  @belongsTo(() => Workspace)
  public workspace: BelongsTo<typeof Workspace>

  @hasMany(() => Resource)
  public resources: HasMany<typeof Resource>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
